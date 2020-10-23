module.exports = {
  siteTitle: 'ArtBox', // <title>
  manifestName: 'ArtBox',
  manifestShortName: 'ArtBox', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-artbox-upcoming/`, // This path is subpath of your hosting https://domain/portfolio
  // social
  heading: 'ArtBox is coming!',
  subHeading:
    "– All forms of art in one box – just before the New Year!",
  socialLinks: [
    {
      icon: 'fa-instagram',
      name: 'Instagram',
      url: 'https://instagram.com/artbox_media',
    },
    {
      icon: 'fa-facebook',
      name: 'Facebook',
      url: 'https://facebook.com/artbox_media',
    },
    {
      icon: 'fa-linkedin',
      name: 'LinkedIn',
      url: 'https://facebook.com/artbox_media',
    },
    {
      icon: 'fa-envelope-o',
      name: 'Email',
      url: 'mailto:info@artbox.media',
    },
  ],
};
