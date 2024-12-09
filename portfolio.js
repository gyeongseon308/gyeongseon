$(document).ready(function () {
    $(".hamburger_icon").click(function () {
        $(".column_box").stop().fadeIn(400);
    });

    $(".close").click(function () {
        $(".column_box").stop().fadeOut(400);
    });

    $(".link_p").click(function () {
        let SubMenu = $(this).siblings(".hamburg_sub");
        let OpenIcon = $(this).find(".open");
        let ShutIcon = $(this).find(".shut");

        if (SubMenu.is(":visible")) {
            SubMenu.slideUp();
            OpenIcon.show();
            ShutIcon.hide();
        } else {
            SubMenu.slideDown();
            OpenIcon.hide();
            ShutIcon.show();
        }
    });

    $(".hamburg_sub>li").mouseenter(function () {
        $(".link_p").css({ "color": "#dd4f5f" });
        $(".link_p>a").css({ "color": "#dd4f5f" });
    })
    $(".hamburg_sub>li").mouseleave(function () {
        $(".link_p").css({ "color": "" });
        $(".link_p>a").css({ "color": "" });
    });
});


$(function () {
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX + 5; // document의 x좌표값
        let mouseY = e.pageY + 5; // document의 y좌표값

        let cursor = document.querySelector('.cursor');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
});

$(function () {
    const sections = ["section1", "section2", "section3", "section4", "section5"]
    const positions = {};

    sections.forEach(section => {
        if ($(`#${section}`).length) {
            positions[section] = $(`#${section}`).offset().top;
        }
    });

    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop >= positions["section3"] && scrollTop < positions["section4"]) {
            $("#section3>.section3_nav").stop(true, true).fadeIn();
        } else {
            $("#section3>.section3_nav").stop(true, true).fadeOut();
        }
    });
    $(function () {
        let list = [".p1", ".p2", ".p3", ".p4", ".p5", ".p6", ".p7"]
        let projects = {};

        list.forEach(item => {
            if ($(item).length) {
                let pofol = item.slice(1);
                projects[pofol] = $(item).offset().top;
            }
        });

        $(".hamburg_sub>li").click(function () {
            let targetClass = $(this).data("target");
            let scroll = projects[targetClass];

            if (scroll !== undefined) {
                $("html,body").stop().animate({ scrollTop: scroll }, 100);
            }
        });
        $(".section3_nav>ul>li").click(function () {
            let targetClass = $(this).data("target");
            let scroll = projects[targetClass];

            if (scroll !== undefined) {
                $("html,body").stop().animate({ scrollTop: scroll }, 100);
            }
        });
    });
    $(".quick_menu>.quick_btn").click(function () {
        $(".quick_menu>.quick_sub").slideToggle(500);
    });
});
