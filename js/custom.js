(function ($) {
  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $(".preloader").fadeOut(1000); // set duration in brackets
  });

  //Navigation Section
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    autoplay: true,
  });

  // PARALLAX EFFECT
  $.stellar();

  // SMOOTHSCROLL
  $(function () {
    $(".navbar-default a, #home a, footer a").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // WOW ANIMATION
  new WOW({ mobile: false }).init();
  $(function () {
    var datascource = {
      name: "",
      title: "Knowledge",
      nodeTitle: "name", // This property is used to retrieve “title” value in datasource
      nodeContent: "title",
      children: [
        {
          name: "YES",
          title: "Usuage",
          children: [
            {
              name: "YES",
              children: [
                {
                  name: "",
                  title:
                    "Seek permission to make him/her family planning Advocate",
                  children: [
                    {
                      name: "YES",
                      children: [
                        {
                          name: "",
                          title:
                            "provide  souvenir(s) on family planning & contraception advocacy",
                        },
                      ],
                    },
                    {
                      name: "NO",
                      title: "",
                      children: [
                        {
                          name: "why?",
                          title: "",
                          children: [
                            { name: "", title: "Religion" },
                            { name: "", title: "Social" },
                            { name: "", title: "Health" },
                            { name: "", title: "Cultural" },
                          ],
                        },
                        {
                          name: "Other reasons",
                          title: "",
                          children: [
                            { name: "", title: "gives name" },
                            { name: "", title: "or phone number of contacts" },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "NO",
              children: [
                {
                  name: "",
                  title: "Counsel on family planning & contraceptive methods",
                },
                {
                  name: "",
                  title: "Refer to FP & contraceptive clinic",
                  relationship: 100,
                },
              ],
            },
          ],
        },
        {
          name: "NO",
          title: "Do you think it is importand?",
          children: [
            {
              name: "YES",
              title: "",
              children: [
                {
                  name: "",
                  title:
                    "Seek permission to make him/her family planning Advocate",
                },
                {
                  name: "",
                  title: "Refer to FP & contraceptive clinic",
                  relationship: 100,
                },
              ],
            },
            {
              name: "NO",
              title: "",
              children: [
                {
                  name: "",
                  title: "Give Family planning and contraceptive counselling.",
                },
              ],
            },
          ],
        },
      ],
    };

    $("#chart-container").orgchart({
      data: datascource,
      nodeContent: "title",
      pan: true,
      collapse: true,
      zoom: true,
      nodeContent: "title",
      verticalDepth: 2, // From the 3th level of orgchart, nodes will be aligned vertically.
      depth: 2,
      exportButton: true,
      exportFilename: "MyOrgChart",
      createNode: function (node, data) {
        node.find(".content").css({
          "white-space": "normal",
          height: "auto",
          "font-size": "12px",
        }); // Adjust as needed
      },
    });
  });
  $(document).ready(function () {
    $("#org-chart-container").draggable();
  });
})(jQuery);
