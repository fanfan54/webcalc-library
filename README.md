# webcalc-library
Open source library of *courses, examples, and other materials* written for the **WebCalc add-in** on Casio fx-9860gii / Casio Graph 75+ calculators.
**Work in progress!!**

## Learn more about WebCalc

* Official page add-in **WebCalc** made by [*Lephenixnoir*](http://www.planet-casio.com/Fr/compte/voir_profil.php?membre=lephenixnoir "Lephenixnoir's profile page on Planete Casio"): http://www.planet-casio.com/Fr/programmes/programme2849-1-WebCalc-Lephenixnoir-add-in.html

* Download the **WebCalc** source code from its official page, available on licence CeCILL (unknown licence version): http://www.planet-casio.com/Fr/programmes/dl.php?id=2849&num=2

No file on this repository contains work from *Lephenixnoir*, this repo's contributors coded everything, even the Calc2JS files. But, their code is designed to be read by this specific software.

## How to use all these files?
Upload the files to your Casio calculator, with the same file architecture as the repo.

**There is just one special case:** the folder *.include* contains files that have to be stored in any folder they're needed.
You may have to copy them to the same folder as your .html files.

Only 1 level of folders is allowed on Casio calculators' internal memory. No subfolder allowed.

## The Calc2JS project
I started the Calc2JS project, a set of polyfills (CSS and JS files) to fix the (quite) not standard syntax of HTMcalc – the syntax that WebCalc understands, derived from HTML – so it's readable and works exactly like in the calculator, **when the .htm files are opened in a desktop web browser**. Again, work in progress...
