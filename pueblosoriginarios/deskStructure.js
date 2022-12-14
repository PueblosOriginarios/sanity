import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Footer")
        .child(S.document().schemaType("footer").documentId("footer")),
      S.listItem()
        .title("Header")
        .child(S.document().schemaType("header").documentId("header")),
      S.listItem()
        .title("Home")
        .child(S.document().schemaType("home").documentId("home")),
      S.listItem()
        .title("Visitant")
        .child(S.document().schemaType("visitant").documentId("visitant")),
      S.listItem()
        .title("Residente")
        .child(S.document().schemaType("residentes").documentId("residentes")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["footer", "header", "home", "visitant", "residentes"].includes(
            listItem.getId()
          )
      ),
    ]);
