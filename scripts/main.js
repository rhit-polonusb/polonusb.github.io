var screen = screen || {};

screen.main = function () {
    for (const p of document.querySelectorAll("#portfolioItems p")) p.hidden = true;

    for (const b of document.querySelectorAll(".show-button")) b.onclick = (event) => {
        let x = b.nextElementSibling.nextElementSibling;
        if (x.hidden) {
            x.hidden = false;
            b.innerHTML = "Click to Hide Text";
        } else {
            x.hidden = true;
            b.innerHTML = "Click to Show Text";
        }
    };
	console.log("Ready");
};

screen.main();