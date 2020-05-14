<template id="create-post">
    <div>
        <h3>Create new post</h3>
        <form v-on:submit.prevent = "createPost">
            <div class="form-group">
                <label for="add-title">Title</label>
                <input id="add-title" v-model="post.title" class="form-control" required />
            </div>
            <div class="form-group">
                <label for="add-title">Text</label>
                <textarea class="form-control" rows="10" v-model = "post.text"></textarea>
            </div>
        </form>
        <button type="submit" class="btn btn-xs btn-primary">Create Post</button>
        <router-link class="btn btn-xs btn-warning" v-bind:to="'/'">Cancel</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    text: '',
                }
            };
        },

        methods: {
            fetchPosts(){
                fetch('api/posts').then(res => res.json()).then(res => {
                    this.posts = res.data;
                });
            },
            createPost() {
                fetch('api/posts/', {
                    method: 'post',
                    body:JSON.stringify(this.post),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(res => res.json()).then(data => {
                    this.post.title = '';
                    this.post.text = '';
                    alert('Psot Added');
                    this.$router.push({name: 'Posts'});
                })
            }
        }
    }
</script>