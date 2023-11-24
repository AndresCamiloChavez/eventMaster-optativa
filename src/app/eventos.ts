export interface Evento{
    titulo: string;
    descripcion: string
    foto: string;
    precio: string;
    descuento: string;
}

export const eventos: Evento[] = [
    {
        titulo: "Celebraciones",
        descripcion: "Imagina un espacio donde tus sueños toman forma, donde la magia de la ocasión se refleja en cada rincón y donde tú y tus seres queridos pueden disfrutar sin preocupaciones. Con una atención personalizada, decoración encantadora y servicios excepcionales, nos esforzamos por hacer que cada celebración sea única y memorable",
        foto: "assets/fiestas.jpeg",
        precio: "¡Cotiza ya!",
        descuento: "10% descuento"
    },
    {
        titulo: "Cumpleaños",
        descripcion: "¿Quieres hacer que el cumpleaños de tu ser querido sea inolvidable? Organiza una fiesta sorpresa en nuestro espacio exclusivo. Ofrecemos un ambiente festivo, opciones personalizadas de decoración y servicios de catering excepcionales. ¡Haz de este cumpleaños un día para recordar!",
        foto: "assets/cumplea.jpeg",
        precio: "¡Cotiza ya!",
        descuento: ""
    },
    {
        titulo: "Matrimonio",
        descripcion: "Celebra el día más especial de tu vida en nuestro hermoso espacio. Desde la ceremonia hasta la recepción, ofrecemos un entorno elegante y romántico para tu boda de ensueño. Nuestro equipo dedicado se encargará de cada detalle para que puedas disfrutar de cada momento con serenidad",
        foto: "assets/matrimonio.jpeg",
        precio: "¡Cotiza ya!",
        descuento: "5% descuento"
    },
    {
        titulo: "15 Años",
        descripcion: "Celebra la transición a la adolescencia con una fiesta de quince años verdaderamente mágica. Nuestro espacio se transformará en un reino encantado, con detalles de princesa, luces brillantes y un ambiente de cuento de hadas. Una noche llena de elegancia y diversión para la quinceañera y sus invitados",
        foto: "assets/15.jpeg",
        precio: "¡Cotiza ya!",
        descuento: ""
    },
    {
        titulo: "Baby Shower",
        descripcion: "Celebra la llegada de un nuevo miembro de la familia en un entorno dulce y encantador. Nuestro espacio es ideal para baby showers, con opciones de decoración temática y menús personalizados. ¡Crea recuerdos especiales mientras anticipas la llegada del pequeño o la pequeña!",
        foto: "assets/baby.jpg",
        precio: "¡Cotiza ya!",
        descuento: "12% descuento"
    },
    {
        titulo: "Graduaciones",
        descripcion: "Marca el final de una etapa y el comienzo de nuevas aventuras con una fiesta de graduación inolvidable. Ofrecemos un ambiente vibrante y moderno, perfecto para celebrar los logros académicos. Personaliza el espacio según los colores y temas de tu escuela para una experiencia única.",
        foto: "assets/gradua.png",
        precio: "¡Cotiza ya!",
        descuento: ""
    }
]