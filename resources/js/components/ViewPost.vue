<template id="posts">
    <div>
        <h3>{{ post.title }}</h3>
        <strong>Text: </strong>
        <div>
            {{ post.text }}
        </div>
        <span class="glyphicon glyphicon-arrow-left"></span>
        <router-link v-bind:to="'/'">Back to posts</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    text: '',
                },
            };
        },

        created() {
            this.fetchPosts();
        },
        methods: {
            fetchPosts(){
                fetch('api/posts'+this.$route.params.id).then(res => res.json()).then(res => {
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