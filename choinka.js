function rysujChoinke(n) {
    for (var i = 1; i <= n; i++) {
        var star = ' ';
        for (j = 1; j <= i * 2 - 1; j++) {
            star += '*';
        };
        console.log(star);
    };
};

rysujChoinke(3);