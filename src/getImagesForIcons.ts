// import { chromium } from "playwright";
// async function getImagesForIcons() {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   // sitio a donde se va a navegar
//   await page.goto("https://bleach-anime.com/en/character/");

//   await page.waitForSelector(".p-chara_in__list");

//   // Selecciona todas las imágenes con sus atributos de `src` y `data-src`
//   // const characterText = await page.$$eval(".chara_data__inner", imgs => {
//   //   return imgs.map(img => ({
//   //     // Cómo las imagenes se cargan dinámicamente, se debe esperar a que se carguen
//   //     imageUrl: img.src || img.getAttribute("data-src"),
//   //   }));
//   // });
//   const characters = await page.$$eval(".p-chara_in__thumb", imgs => {
//     return imgs.map((img: any) => ({
//       // Cómo las imagenes se cargan dinámicamente, se debe esperar a que se carguen
//       imageUrl: img.src || img.getAttribute("data-src"),
//     }));
//   });

//   await browser.close();
//   return characters;
//   // Se imprime el array de objetos con las imágenes
// }

// export default getImagesForIcons;
