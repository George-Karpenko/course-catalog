import { Server } from "miragejs";
export default new Server({
  routes() {
    // this.namespace = "api";
    this.get("/couses/", () => {
      return [
        {
          id: 3,
          preview_img_path: "cover/pic4.jpg",
          title: "Базовые принципы разработки решений с блокчейн",
          cost: 135000,
          cost_currency: "₽",
          series: "Программирование",
        },
        {
          id: 8,
          preview_img_path: "cover/pic9.jpg",
          title:
            "Базовые принципы разработки решений с блокчейн. Продвинутый уровень",
          cost: 80000,
          cost_currency: "₽",
          series: "Программирование",
        },
        {
          id: 1,
          preview_img_path: "cover/pic2.jpg",
          title: "Как добывают нефть",
          cost: 135000,
          cost_currency: "₽",
          series: "Профессия",
        },
        {
          id: 6,
          preview_img_path: "cover/pic7.jpg",
          title: "Как добывают нефть. Продвинутый уровень",
          cost: 150000,
          cost_currency: "₽",
          series: "Профессия",
        },
        {
          id: 2,
          preview_img_path: "cover/pic3.jpg",
          title: "Основы искусственного интеллекта и машинного обучения с Python",
          cost: 135000,
          cost_currency: "₽",
          series: "Программирование",
        },
        {
          id: 7,
          preview_img_path: "cover/pic8.jpg",
          title:
            "Основы искусственного интеллекта и машинного обучения с Python. Продвинутый уровень",
          cost: 150000,
          cost_currency: "₽",
          series: "Программирование",
        },
        {
          id: 4,
          preview_img_path: "cover/pic5.jpg",
          title: "Продажи от «А» до «Я»",
          cost: 135000,
          cost_currency: "₽",
          series: "Бизнес навыки",
        },
        {
          id: 9,
          preview_img_path: "cover/pic10.jpg",
          title: "Продажи от «А» до «Я». Продвинутый уровень",
          cost: 160000,
          cost_currency: "₽",
          series: "Бизнес навыки",
        },
        {
          id: 10,
          preview_img_path: "cover/pic1.jpg",
          title: "Прокрастинация: как не откладывать дела",
          cost: 135000,
          cost_currency: "₽",
          series: "Бизнес навыки",
        },
        {
          id: 5,
          preview_img_path: "cover/pic6.jpg",
          title: "Прокрастинация: как не откладывать дела. Продвинутый уровень",
          cost: 150000,
          cost_currency: "₽",
          series: "Бизнес навыки",
        },
        
        // {
        //   id: 13,
        //   preview_img_path: "cover/pic4.jpg",
        //   title: "Базовые принципы разработки решений с блокчейн",
        //   cost: 135000,
        //   cost_currency: "₽",
        //   series: "Программирование",
        // },
        // {
        //   id: 18,
        //   preview_img_path: "cover/pic9.jpg",
        //   title:
        //     "Базовые принципы разработки решений с блокчейн. Продвинутый уровень",
        //   cost: 80000,
        //   cost_currency: "₽",
        //   series: "Программирование",
        // },
        // {
        //   id: 11,
        //   preview_img_path: "cover/pic2.jpg",
        //   title: "Как добывают нефть",
        //   cost: 135000,
        //   cost_currency: "₽",
        //   series: "Профессия",
        // },
        // {
        //   id: 16,
        //   preview_img_path: "cover/pic7.jpg",
        //   title: "Как добывают нефть. Продвинутый уровень",
        //   cost: 150000,
        //   cost_currency: "₽",
        //   series: "Профессия",
        // },
        // {
        //   id: 12,
        //   preview_img_path: "cover/pic3.jpg",
        //   title: "Основы искусственного интеллекта и машинного обучения с Python",
        //   cost: 135000,
        //   cost_currency: "₽",
        //   series: "Программирование",
        // },
        // {
        //   id: 17,
        //   preview_img_path: "cover/pic8.jpg",
        //   title:
        //     "Основы искусственного интеллекта и машинного обучения с Python. Продвинутый уровень",
        //   cost: 150000,
        //   cost_currency: "₽",
        //   series: "Программирование",
        // },
        // {
        //   id: 14,
        //   preview_img_path: "cover/pic5.jpg",
        //   title: "Продажи от «А» до «Я»",
        //   cost: 135000,
        //   cost_currency: "₽",
        //   series: "Бизнес навыки",
        // },
        // {
        //   id: 19,
        //   preview_img_path: "cover/pic10.jpg",
        //   title: "Продажи от «А» до «Я». Продвинутый уровень",
        //   cost: 160000,
        //   cost_currency: "₽",
        //   series: "Бизнес навыки",
        // },
        // {
        //   id: 20,
        //   preview_img_path: "cover/pic1.jpg",
        //   title: "Прокрастинация: как не откладывать дела",
        //   cost: 135000,
        //   cost_currency: "₽",
        //   series: "Бизнес навыки",
        // },
        // {
        //   id: 15,
        //   preview_img_path: "cover/pic6.jpg",
        //   title: "Прокрастинация: как не откладывать дела. Продвинутый уровень",
        //   cost: 150000,
        //   cost_currency: "₽",
        //   series: "Бизнес навыки",
        // },
      ];
    });
  }
});