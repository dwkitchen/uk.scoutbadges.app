import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends React.Component {
    render() {
        const coreBadges = this.props.data.coreBadges.edges
        const activityBadges = this.props.data.activityBadges.edges
        const stagedBadges = this.props.data.stagedBadges.edges

        return (
          <Layout>
            <h1>Scouts</h1>
              <h2>Core Badges</h2>
              <ul>
                  {coreBadges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                  ))}
              </ul>
              <h2>Activity Badges</h2>
              <ul>
                  {activityBadges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                      ))}
              </ul>
              <h2>Staged Activity Badges</h2>
              <ul>
                  {stagedBadges.map(badge => (
                      <li key={badge.node.fields.slug}>
                          <Link to={badge.node.fields.slug}>
                              {badge.node.frontmatter.title}
                          </Link>
                      </li>
                  ))}
              </ul>
          </Layout>
      )
    }
}

export default IndexPage

export const pageQuery = graphql`
query {
    coreBadges: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { section: { eq: "scouts" } type: { eq: "core" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    activityBadges: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { section: { eq: "scouts" } type: { eq: "activity" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    stagedBadges: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "staged" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
