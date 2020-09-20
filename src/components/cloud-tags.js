import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import ButtonBadge from "./elements/button-badge";
import kebabCase from "lodash/kebabCase"

function CloudTags() {
  const categoryResult = useStaticQuery(graphql`
    {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
      fieldValue
      totalCount
      }
    }
  }
  `);

  const tagslist = categoryResult.allMarkdownRemark.group;
  const tags = tagslist.filter(tag => tag.totalCount >= 2)
    .map(tag => <ButtonBadge url={`/tag/${kebabCase(tag.fieldValue)}`} key={tag.fieldValue} title={`#${tag.fieldValue}`} value={tag.totalCount} color={`tag-${tag.fieldValue}`}>{tag.fieldValue}</ButtonBadge>);

  return (

      <div classNmae="flex flex-wrap">
        {tags}
      </div>

  );
}

export default CloudTags;


