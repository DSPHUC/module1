let multi;
multi = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
for (let x = 1; x <= 10; x++) {
    multi = multi + ("<tr>")
    for (y = 1; y <= 10; y++) {
        multi = multi + ("<td>") + x * y + ("</td>");

    }
    multi = multi + ("</tr>")
}
multi = multi + ("<table>");
document.write(multi);