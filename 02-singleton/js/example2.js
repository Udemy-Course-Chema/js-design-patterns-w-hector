/**
 * Caso Práctico
 */
class WeekDays {
    daysEs = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ];

    daysEn = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    constructor(lang) {
        this.lang = lang;

        if (WeekDays.instance) {
            return WeekDays.instance;
        }
        return WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es" ?
            this.daysEs :
            this.daysEn;
    }
}

const weekDays = new WeekDays("en");
const weekDays2 = new WeekDays("es");
console.log( weekDays.getDays() );
console.log( weekDays2.getDays() );
