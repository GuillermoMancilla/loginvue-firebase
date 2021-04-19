<template>
<div class="dashbody">
  <div>
    <b-button v-b-toggle.sidebar-no-header class="mb-3 panel">panel ➡️</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">user panel</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Panel ⬅️</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
    <!-- {{user.name}} -->
    <div class="container my-5">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil 
        molestiae consequatur, 
        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    </div>
</div>
</template>

<script>
// import firebase from 'firebase'
export default {
}
</script>
<style scoped>
.panel{
    margin-top: -2%;
}
/* .dashbody{
  height: 22rem;
  overflow: hidden;
} */
</style>