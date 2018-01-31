/* Calc2HTML project from github.com/fanfan54/webcalc-library. */

// Add style only used on web browser
// - bigger viewport

// Remove HTMcalc tweaks
var c2h_lists = document.querySelectorAll('li, ol'), i;
for (i = 0; i < c2h_lists.length; i++) {
    c2h_lists[i].textContent = c2h_lists[i].textContent.substr(2);
}

// Or overwrite the whole CSS, or import a specific CSS for PCs.

// Enanle TeXMaths for every math equation.
