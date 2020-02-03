import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Card, VFlex, H3, P, Flex, Fade } from '../../shared'

import { BLOG_POST_ROUTE } from '../../constants/routes'
import {
  BORDER_RADIUS,
  M2,
  maxWidth,
  PHONE,
} from '../../constants/measurements'
import { IGhostPost } from '../../types'

const PostThumbnail = styled.img`
  object-fit: contain;
  border-radius: ${BORDER_RADIUS};
`

const PostCard = styled(Card)`
  flex-basis: 30%;
  max-width: 50%;
  min-width: 14rem;
  flex-grow: 1;
  margin-right: 1.5rem;

  ${maxWidth(PHONE)} {
    max-width: none;
    width: 100%;
  }
`

const Post = ({ slug, title, excerpt, feature_image }: IGhostPost) => {
  return (
    <PostCard bordered hoverable clickable>
      <Link to={BLOG_POST_ROUTE(slug)}>
        <VFlex>
          <H3 mb2>{title}</H3>
          <PostThumbnail src={feature_image} />
          <P mb1 sm>
            {excerpt}
          </P>
        </VFlex>
      </Link>
    </PostCard>
  )
}

const PostList = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;

  ${maxWidth(PHONE)} {
    display: block;
  }
`

const Posts = ({ posts }) => (
  <Fade distance={M2}>
    <PostList>
      {posts.map((post: IGhostPost) => (
        <Post key={post.slug} {...post} />
      ))}
    </PostList>
  </Fade>
)

export default Posts