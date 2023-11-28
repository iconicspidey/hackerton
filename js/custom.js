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
                      title: "why?",
                      children: [
                        { name: "", title: "Religion" },
                        { name: "", title: "Social" },
                        { name: "", title: "Health" },
                        { name: "", title: "Cultural" },
                      ],
                      children: [
                        {
                          name: "Other reasons",
                          children: [
                            { name: "", title: "Gives names" },
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
      // nodeContent: "title",
      // verticalDepth: 3, // From the 3th level of orgchart, nodes will be aligned vertically.
      // depth: 4,
      createNode: function (node, data) {
        node.find(".content").css({
          "white-space": "normal",
          height: "auto",
          "font-size": "12px",
        }); // Adjust as needed
        if (data.relationship && data.relationship === 100) {
          // Add special styling for nodes with a relationship of 100
          node.css("border", "2px solid red");
          node.css("background-color", "lightyellow");

          // Draw arrows from the current node to its children with a relationship of 100
          node
            .children(".nodes")
            .children(".node")
            .each(function () {
              var childId = $(this).attr("id");

              // Check if the child node has a relationship of 100
              var childData = datascource.findNodeById(childId);
              if (
                childData &&
                childData.relationship &&
                childData.relationship === 100
              ) {
                drawArrow(node, this);
              }
            });
        }
      },
    });
  });
  function drawArrow(sourceNode, destNode) {
    var sourcePos = sourceNode.position();
    var destPos = destNode.position();

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    // Calculate the path of the arrow
    var pathStr =
      "M " +
      (sourcePos.left + sourceNode.width()) +
      " " +
      (sourcePos.top + sourceNode.height() / 2);
    pathStr +=
      " L " + destPos.left + " " + (destPos.top + destNode.height() / 2);

    path.setAttribute("d", pathStr);
    path.setAttribute("stroke", "blue"); // Adjust arrow color
    path.setAttribute("stroke-width", "2");

    svg.appendChild(path);

    // Append the arrow to the body
    document.body.appendChild(svg);
  }
})(jQuery);

// Array.from(document.querySelectorA(".title")).forEach((element) => {
//   element.style.width = "500px";
// });
// document.querySelectorA(".content").forEach((element) => {
//   element.style.width = "min-content";
// });
