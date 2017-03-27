import React, {Component} from 'react'
import PostItem from './PostItem'
import {Link} from 'react-router'
import './PostList.less'

export default class PostList extends Component {

    constructor(props) {
        super(props);
        this._handleLoadMore = this._handleLoadMore.bind(this);
    }

    componentDidMount() {
        const {fetchData} =this.props;
        const tag = this.props.params.tag || 'all';
        fetchData(tag,0);
        window.addEventListener("scroll", this._handleLoadMore);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.tag != this.props.params.tag) {
            const {fetchData} =nextProps;
            const tag = nextProps.params.tag || 'all';
            fetchData(tag);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleLoadMore)
    }

    _handleLoadMore() {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (document.documentElement.scrollHeight == document.documentElement.clientHeight + scrollTop) {
            const {fetchData, fetchedPageCount:page} =this.props;
            const tag = this.props.params.tag || 'all';
            if (page != 0) {
                fetchData(tag,page);
            }
        }
    }

    render() {
        let {data} = this.props;
        if (!data || data.length <= 0) {
            return (
                <div className="postlist">
                    Loading...
                </div>
            )

        } else {
            return (
                <div className="postList">
                    {
                        data.map((item, index) => {
                            return (
                                <Link to={"/topic/"+item.id}
                                      key={item.id}
                                >
                                    <PostItem
                                        {...item}
                                    />
                                </Link>
                            );
                        })
                    }
                </div>
            );
        }
    }
}