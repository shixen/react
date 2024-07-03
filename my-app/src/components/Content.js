import React, { Component } from "react";
import css from "./css/Content.module.css";
import postsData from "../posts.json";
import PostItem from "./PostItem";

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedPosts: postsData.savedPosts
        };
    }
    
    render() {
        const { savedPosts } = this.state;

        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div className={css.SearchResults}>
                    {savedPosts.map((post, index) => (
                        <PostItem key={index} post={post} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Content;