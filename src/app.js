import { DefineMap, route } from 'can';
import RoutePushstate from 'can-route-pushstate';
import debug from 'can-debug#?./is-dev';

//!steal-remove-start
if(debug) {
	debug();
}
//!steal-remove-end

const AppViewModel = DefineMap.extend("AppViewModel", {
  env: {
    default: () => ({NODE_ENV:'development'})
  },
  title: {
    default: 'portal-ssr'
  },
  routeData: {
    default: () => route.data
  },
  get pageComponent () {
    switch (this.routeData.page) {
      case 'home': {
        return window.steal.import('~/pages/page-one.component').then(({default: PageOne}) => {
          return new PageOne()
        })
      }

      case 'page-two': {
        return window.steal.import('~/pages/page-two.component').then(({default: PageTwo}) => {
          return new PageTwo()
        })
      }
    }
  }
});

route.urlData = new RoutePushstate();
route.register("{page}", { page: "home" });

export default AppViewModel;
