export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },
    {
      title: true,
      name: 'Data',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Books',
      url: '/books',
      icon: 'fa fa-book',
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'fa fa-users',
    },
    {
      name: 'Customers',
      url: '/customers',
      icon: 'fa fa-user',
    },
    {
      name: 'Libraries',
      url: '/library',
      icon: 'fa fa-building',
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Statistics',
      url: '/statistics',
      icon: 'icon-pie-chart',
    },
    {
      name: 'About',
      url: '/about',
      icon: 'fa fa-info',
    },
  ],
};
