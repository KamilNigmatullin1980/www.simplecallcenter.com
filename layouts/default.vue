<template>
    <div>
        <!-- <Header/> -->
        <navbar />
        <!-- <MenuBar/> -->
        <div class="flex flex-col min-h-screen ">
            <main>
                <slot></slot>
            </main>
        </div>
        <Footer />
    </div>
    
    
</template>


<script setup>
    const route = useRoute();
    useHead({
        link: [
            {
                rel: 'canonical',
                href: 'https://www.simplecallcenter.com' + route.path
            }
        ],
    });
</script>
