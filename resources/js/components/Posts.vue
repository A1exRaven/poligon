<template id="posts">
    <div class="row">
        <div class="pull-right">
            <router-link class="btn btn-xs btn-primary" v-bind:to="{name: 'CreatePost'}">
                <span class="glyphicon glyphicon-plus"></span>
                Create New Post
            </router-link>
        </div>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>#</th>
                <th>Post Title</th>
                <th>Post Text</th>
                <th class="col-md-2">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(post, index) in filteredPosts">
                <td>{{ index + 1 }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.text }}</td>
                <td><router-link class="btn btn-info btn-xs" v-bind:to="{name: 'ViewPost', params: {id: post.id}}">Show</router-link>
                <td><router-link class="btn btn-warning btn-xs" v-bind:to="{name: 'UpdatePost', params: {id: post.id}}">Update</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
create-post
<script>
    export default {
        data() {
            return {
                posts: '',
            };
        },

        created() {
            this.fetchPosts();
        },
        methods: {
            fetchPosts(){
                fetch('api/posts').then(res => res.json()).then(res => {
                    this.posts = res.data;
                });
            },
        },
        computed: {
            filteredPosts: function() {
                if(this.posts.length){
                    return this.posts;
                }
            }
        },
    }
</script>