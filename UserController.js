
// Main Controller for the Angular Material Starter App

function UserController( userService, $mdSideNav, $mdBottomSheet ) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.share        = selectShare;
  self.toggleList   = toggleUsersList;

  // Load all registered users
  userService.loadAllUsers().then( function( users ) {
    self.users    = [].concat(users);
    self.selected = users[0];
  });

   function selectUser (user, s) {
     if(s) {
       share(self.selected);
     } else {
       self.selected = user;
     }
   }

   function toggleUsersList() {
     $mdSideNav('left').toggle();
   }

   /**
    * Show the bottom sheet
    */
   function selectShare(selectedUser) {
       var appRoot = 'https://rawgit.com/angular/material-start/es5-tutorial/app/';

       $mdBottomSheet.show({
         controllerAs     : "vm",
         controller       : ['$mdBottomSheet', ContactSheetController],
         templateUrl      : './templates/contactSheet.html',
         parent           : angular.element(document.getElementById('content'))
       });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactSheetController( $mdBottomSheet ) {
          var rootURL = "./svg/";

          this.user = selectedUser;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: rootURL + 'phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: rootURL + 'twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: rootURL + 'google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: rootURL + 'hangouts.svg'}
          ];
          this.contactUser = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet
            $mdBottomSheet.hide(action);
          };
        }
   }

}
