import React from "react";

import "./collection-preview.styles.scss";

import "../collection-item/collection-item.component";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, idx) => idx < 4)
        .map(({ id, ...otheItemProps }) => (
          <CollectionItem key={id} {...otheItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
