import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import ResultList from '../components/Search/ResultList'
import './search.scss'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
    }
  }

  componentDidMount() {
    console.log('[SearchPage] props', this.props)
  }

  handleKeyword = event => {
    this.setState({ keyword: event.target.value })
  }

  render() {
    const location = this.props.location
    return (
      <Layout location={location}>
        <div>
          <div className="search-bar">
            <Fa className="search-icon" icon={faSearch} />
            <input id="searchInput" type="search" onChange={this.handleKeyword} />
          </div>
          <ResultList data={this.props.data} keyword={this.state.keyword} />
        </div>
      </Layout>
    )
  }
}

SearchPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SearchPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          rawMarkdownBody
          fields {
            slug
          }
          frontmatter {
            title
            published
          }
        }
      }
    }
  }
`
