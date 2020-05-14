<template id="update-post">
    <div>
        <h3>Update post</h3>
        <form v-on:submit.prevent = "updatePost">
            <div class="form-group">
                <label for="update-title">Title</label>
                <input id="update-title" v-model="post.title" class="form-control" required />
            </div>
            <div class="form-group">
                <label for="update-title">Text</label>
                <textarea class="form-control" rows="10" v-model = "post.text"></textarea>
            </div>
        </form>
        <button type="submit" class="btn btn-xs btn-primary">Update Post</button>
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
        created(){
            fetch('api/posts'+this.$route.params.id+'/update').then(res => res.json()).then(res => {
                this.posts = res.data;
            });
        },

        methods: {

            createPost() {
                fetch('api/posts/'+this.$route.params.id, {
                    method: 'post',
                    body:JSON.stringify(this.post),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(res => res.json()).then(data => {
                    this.post.title = '';
                    this.post.text = '';
                    alert('Psot Updated');
                    this.$router.push({name: 'Posts'});
                })
            }
        }
    }
</script>