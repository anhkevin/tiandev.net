<template>
  <div>
    <Siderbar />
    <div class="main-wrapper">
      <section class="cta-section theme-bg-light px-3 py-5 p-md-5">
        <div class="container text-left">
          <h2 class="heading"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" class="svg-inline--fa fa-briefcase fa-w-16 fa-fw me-2"><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
          {{ tagName }}</h2>
        </div>
      </section>
      <section class="blog-list px-3 py-5 p-md-5">
        <div class="container">
          <div class="row">
              
              <div v-for="video of listPost" :key="video.slug" class="col-md-4 mb-3">
                <div class="card blog-post-card">
                  <nuxt-link :to="{ path: '/video/' + video.slug + '/'}" class="theme-link" >
                  <img class="card-img-top" :src="thumnailYoutube(video.slug)" :alt="video.title">
                  </nuxt-link>
                  <div class="card-body">
                    <h5 class="card-title">
                      <nuxt-link :to="{ path: '/video/' + video.slug + '/'}" class="theme-link" >{{ video.title }}</nuxt-link>
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
        const tagName = "Video"

        return { 
            tagName,
        }
    },
    computed: {
        isHideMain() {
            if (this.$store.state.search) {
                return true;
            }
            return false;
        }
    },
    methods: {
      thumnailYoutube(slug) {
        let slug_split = slug.split("-iud");
        let tagName = slug_split[1]
        let img = 'https://img.youtube.com/vi/'+tagName+'/maxresdefault.jpg';
        return img;
      }
    },
    data() {
      return {
        listPost: {}
      };
    },
    async fetch() {
      this.listPost = await this.$content('video')
        .only(['title', 'slug'])
        .fetch()
    },
    head() {
      const title = "Video | " + process.env.namePage
      const description = process.env.description
      return {
        title,
        link: [{ hid: 'canonical', rel: 'canonical', href: process.env.baseUrl + "/video/" }],
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description
          },
          // Open Graph
          {
            hid: "og:url",
            property: "og:url",
            content: process.env.baseUrl + "/video/",
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: title
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: description
          },
          // // Twitter Card
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: title
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: description
          }
        ]
      }
    }
  }
</script>