const menu = [
    {
        path: '/',
        name: 'Home',
        protected: false
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        protected : false
    },
    {
        path: '/employees',
        name: 'Employees',
        protected: true
    },
    {
        path:'/about',
        name: 'Nosotros',
        protected:false
    }
];

export default menu;