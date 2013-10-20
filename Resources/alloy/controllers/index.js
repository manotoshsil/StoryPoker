function Controller() {
    function flipFlop() {
        $.three.animate({
            left: 250,
            duration: 300,
            width: 900,
            height: 500,
            zIndex: 10
        });
        toggle = true;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "black",
        layout: "horizontal",
        horizontalWrap: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.zero = Ti.UI.createView({
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12,
        id: "zero"
    });
    $.__views.index.add($.__views.zero);
    flipFlop ? $.__views.zero.addEventListener("click", flipFlop) : __defers["$.__views.zero!click!flipFlop"] = true;
    $.__views.myCard = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "0",
        id: "myCard"
    });
    $.__views.zero.add($.__views.myCard);
    $.__views.half = Ti.UI.createView({
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12,
        id: "half"
    });
    $.__views.index.add($.__views.half);
    flipFlop ? $.__views.half.addEventListener("click", flipFlop) : __defers["$.__views.half!click!flipFlop"] = true;
    $.__views.myCard = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "0.5",
        id: "myCard"
    });
    $.__views.half.add($.__views.myCard);
    $.__views.one = Ti.UI.createView({
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12,
        id: "one"
    });
    $.__views.index.add($.__views.one);
    flipFlop ? $.__views.one.addEventListener("click", flipFlop) : __defers["$.__views.one!click!flipFlop"] = true;
    $.__views.myCard = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "1",
        id: "myCard"
    });
    $.__views.one.add($.__views.myCard);
    $.__views.two = Ti.UI.createView({
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12,
        id: "two"
    });
    $.__views.index.add($.__views.two);
    flipFlop ? $.__views.two.addEventListener("click", flipFlop) : __defers["$.__views.two!click!flipFlop"] = true;
    $.__views.myCard = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "2",
        id: "myCard"
    });
    $.__views.two.add($.__views.myCard);
    $.__views.three = Ti.UI.createView({
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12,
        id: "three"
    });
    $.__views.index.add($.__views.three);
    flipFlop ? $.__views.three.addEventListener("click", flipFlop) : __defers["$.__views.three!click!flipFlop"] = true;
    $.__views.myCard = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "3",
        id: "myCard"
    });
    $.__views.three.add($.__views.myCard);
    $.__views.five = Ti.UI.createView({
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12,
        id: "five"
    });
    $.__views.index.add($.__views.five);
    flipFlop ? $.__views.five.addEventListener("click", flipFlop) : __defers["$.__views.five!click!flipFlop"] = true;
    $.__views.myCard = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "5",
        id: "myCard"
    });
    $.__views.five.add($.__views.myCard);
    $.__views.eight = Ti.UI.createView({
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12,
        id: "eight"
    });
    $.__views.index.add($.__views.eight);
    flipFlop ? $.__views.eight.addEventListener("click", flipFlop) : __defers["$.__views.eight!click!flipFlop"] = true;
    $.__views.myCard = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "8",
        id: "myCard"
    });
    $.__views.eight.add($.__views.myCard);
    $.__views.thirteen = Ti.UI.createView({
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12,
        id: "thirteen"
    });
    $.__views.index.add($.__views.thirteen);
    flipFlop ? $.__views.thirteen.addEventListener("click", flipFlop) : __defers["$.__views.thirteen!click!flipFlop"] = true;
    $.__views.myCard = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "13",
        id: "myCard"
    });
    $.__views.thirteen.add($.__views.myCard);
    $.__views.twentyonet = Ti.UI.createView({
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12,
        id: "twentyonet"
    });
    $.__views.index.add($.__views.twentyonet);
    flipFlop ? $.__views.twentyonet.addEventListener("click", flipFlop) : __defers["$.__views.twentyonet!click!flipFlop"] = true;
    $.__views.myCard = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "21",
        id: "myCard"
    });
    $.__views.twentyonet.add($.__views.myCard);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.zero!click!flipFlop"] && $.__views.zero.addEventListener("click", flipFlop);
    __defers["$.__views.half!click!flipFlop"] && $.__views.half.addEventListener("click", flipFlop);
    __defers["$.__views.one!click!flipFlop"] && $.__views.one.addEventListener("click", flipFlop);
    __defers["$.__views.two!click!flipFlop"] && $.__views.two.addEventListener("click", flipFlop);
    __defers["$.__views.three!click!flipFlop"] && $.__views.three.addEventListener("click", flipFlop);
    __defers["$.__views.five!click!flipFlop"] && $.__views.five.addEventListener("click", flipFlop);
    __defers["$.__views.eight!click!flipFlop"] && $.__views.eight.addEventListener("click", flipFlop);
    __defers["$.__views.thirteen!click!flipFlop"] && $.__views.thirteen.addEventListener("click", flipFlop);
    __defers["$.__views.twentyonet!click!flipFlop"] && $.__views.twentyonet.addEventListener("click", flipFlop);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;