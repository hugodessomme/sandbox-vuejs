Vue.component('card', {
    props: ['title', 'content'],
    data() {
        return {
            claps: 0
        }
    },
    template: `
    <div class="card my-3">
        <div class="card-body">
            <h3 class="card-title">{{ title }}</h3>
            <div class="card-text">{{ content }}</div>
            <div class="text-center text-muted display-4">{{ claps }}</div>
        </div>

        <button @click="clapForArticle" class="btn btn-info btn-sm">Clap for me</button>
        <button @click="deleteArticle" class="btn btn-danger btn-sm">Delete Me</button>
    </div>
    `,
    methods: {
        deleteArticle() {
            this.$emit('delete-article', this.title)
        },
        clapForArticle() {
            this.claps++
        }
    }
});

new Vue({
    el: '#app',
    data: {
        articles: [
            {
                title: 'VueJS for beginners',
                content: 'Lorem basic text'
            },
            {
                title: 'VueJS for experts',
                content: 'Lorem basic text 2'
            }
        ]
    },
    methods: {
        removeArticle(event) {
            this.articles = this.articles.filter(article => article.title !== event)
        }
    }
})