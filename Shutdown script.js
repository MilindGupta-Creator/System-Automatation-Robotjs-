var robot = require("robotjs");

setTimeout(shutdown, 2000);

function shutdown() {
    robot.moveMouseSmooth(27, 694);
    setTimeout(function () {
        robot.mouseClick();
        setTimeout(function () {

            robot.moveMouseSmooth(21, 654);
            robot.mouseClick();

            setTimeout(function () {
                robot.moveMouseSmooth(93, 563);
                robot.mouseClick();
            }, 1000);
        }, 1000);
    }, 1000);
}