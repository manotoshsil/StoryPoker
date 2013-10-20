module.exports = [ {
    isApi: true,
    priority: 1000.0003,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "container",
    style: {
        backgroundColor: "white"
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "individCard",
    style: {
        backgroundColor: "#FF6700",
        height: "20%",
        width: "25%",
        borderWidth: 6,
        borderRadius: 20,
        borderColor: "blue",
        touchEnabled: true,
        left: 12,
        top: 12
    }
} ];