// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import article from "./article";
import header from "./header";
import footer from "./footer";
import subMenu from "./subMenu";
import menu from "./menu";
import menuObject from "./menuObject";
import subMenuObject from "./subMenuObject";
import buttonObject from "./buttonObject";
import richText from "./richText";
import banner from "./banner";
import bannerDoble from "./bannerDoble";
import home from "./home";
import youtube from "./youtube";
import dualSymmetric from "./dualSymmetric";
import dualAsymmetric from "./dualAsymmetric";
import iconTextObject from "./iconTextObject";
import colorList from "./colorList";
import articleReference from "./articleReference";
import textBlock from "./textBlock";
import articleCard from "./articleCard";
import moduloResidentes from "./moduloResidentes";
import producto from "./producto";
import quoteCard from "./quoteCard";
import quotes from "./quotes";
import arrayDualSection from "./arrayDualSection";
import image from "./imageComponent";
import arrayBanner from "./arrayBanner";
import booleanArticle from "./boolean";
import carousel from "./carousel";
import historia from "./historia";
import cultura from "./cultura";
import pdf from "./pdf";
import categories from "./categories";
import categoryReference from "./categoryReference";
import noticias from "./noticias";
import booleanNoticias from "./booleanNoticias";
import materiales from "./materiales";
import eventos from "./eventos";
import lengua from "./lengua";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    article,
    articleCard,
    footer,
    header,
    subMenu,
    menu,
    menuObject,
    subMenuObject,
    buttonObject,
    richText,
    banner,
    bannerDoble,
    youtube,
    iconTextObject,
    colorList,
    home,
    dualSymmetric,
    dualAsymmetric,
    articleReference,
    textBlock,
    image,
    arrayDualSection,
    moduloResidentes,
    producto,
    quoteCard,
    quotes,
    arrayBanner,
    booleanArticle,
    carousel,
    historia,
    cultura,
    categories,
    pdf,
    categoryReference,
    noticias,
    booleanNoticias,
    materiales,
    eventos,
    lengua,
  ]),
});
