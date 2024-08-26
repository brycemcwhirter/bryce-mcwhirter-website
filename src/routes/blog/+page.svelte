<script>
    import BlogBoxes from '../../components/layout/BlogBoxes.svelte';
</script>

<div class="grid grid-flow-row grid-rows-2">
    <div class="grid grid-rows-2">
        <h1 class="p-10 text-3xl font-bold flex justify-center align-center">Subscribe Here For Updates</h1>
        <div class="p-5 flex justify-center align-center">
         <input type="email" class="p-4" placeholder="Email Address" />
         <button class="p-4 bg-primaryBlue text-white">Subscribe</button>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3">
        <BlogBoxes />
    </div>
</div>