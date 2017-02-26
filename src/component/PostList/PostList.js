import React, {Component} from 'react'
import TopicItem from '../TopicItem'
import {Link, browserHistory} from 'react-router'
import './PostList.css'

export default class PostList extends Component {

    constructor(props) {
        super(props);
        this._handleLoadMore = this._handleLoadMore.bind(this);
    }

    componentDidMount() {
        const {fetchData} =this.props;
        const tag = this.props.params.tag || 'all';
        const url = `https://cnodejs.org/api/v1/topics?page=0&tab=${tag}&limit=20&mdrender=false`
        fetchData(url, tag);
        window.addEventListener("scroll", this._handleLoadMore);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.tag != this.props.params.tag) {
            const {fetchData} =nextProps;
            const tag = nextProps.params.tag || 'all';
            const url = `https://cnodejs.org/api/v1/topics?page=0&tab=${tag}&limit=20&mdrender=false`
            fetchData(url, tag);
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
            const url = `https://cnodejs.org/api/v1/topics?page=${page}&tab=${tag}&limit=20&mdrender=false`;
            if (page != 0) {
                fetchData(url, tag);
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
                <div className="postlist">
                    {
                        data.map((item, index) => {
                            return (
                                <Link to={"/topic/"+item.id}
                                      key={index}
                                >
                                    <TopicItem
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