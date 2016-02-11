Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'home'});
Router.route('/publications', {name: 'publications'});
Router.route('/research', {name: 'research'});

