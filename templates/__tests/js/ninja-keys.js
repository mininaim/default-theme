const hotkeys = [
  {
    id: "About",
    title: "About Us",
    hotkey: "cmd+a",
    mdIcon: "diversity_3",
    handler: () => {
      var element_to_scroll_to = document.getElementById("about");
      element_to_scroll_to.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },

  {
    id: "Services",
    title: "Our Services",
    hotkey: "cmd+s",
    mdIcon: "extension",
    handler: () => {
      var element_to_scroll_to = document.getElementById("services");
      element_to_scroll_to.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
  {
    id: "Clients",
    title: "Our Clients",
    hotkey: "cmd+c",
    mdIcon: "phonelink",
    handler: () => {
      var element_to_scroll_to = document.getElementById("clients");
      element_to_scroll_to.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },

  {
    id: "Values",
    title: "Our Values",
    hotkey: "cmd+v",
    mdIcon: "interests",
    handler: () => {
      var element_to_scroll_to = document.getElementById("values");
      element_to_scroll_to.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },

  {
    id: "Contact",
    title: "Contact Us",
    hotkey: "cmd+m",
    mdIcon: "email",
    handler: () => {
      var element_to_scroll_to = document.getElementById("contact");
      element_to_scroll_to.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
  // {
  //     id: "Theme",
  //     title: "Dark/Light Theme",
  //     hotkey: "cmd+d",
  //     mdIcon: "light_mode",
  //     handler: () => {
  //         document.addEventListener('DOMContentLoaded', (event) => {
  //             ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector(
  //                     'body').classList
  //                 .add('dark'): document.querySelector('body').classList.remove('dark')
  //         })
  //     }
  // }
];
const ninja = document.querySelector("ninja-keys");
ninja.data = hotkeys;
