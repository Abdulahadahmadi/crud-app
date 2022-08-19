<template>
    <div class="mx-4 my-10 md:mx-auto md:w-2/3 lg:w-2/4 h-full items-center border border-blue-600 p-4 rounded-lg shadow-xl">
        <form class="mx-6 md:mx-10">
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="name" id="name" class="input peer" placeholder=" " required="">
                <label for="name" class="input-label">Name</label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <input type="email" name="email" id="email" class="input peer" placeholder=" " required="">
                <label for="email" class="input-label">Email</label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <input type="number" name="age" id="age" class="input peer" placeholder=" " required="">
                <label for="age" class="input-label">Age</label>
            </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="address" name="address" id="address" class="input peer" placeholder=" " required="">
                    <label for="address" class="input-label">Address</label>
                </div>
        <div class="flex justify-around">
            <div class="checkbox-parent">
                <input checked="" id="male" type="radio" value="" name="gender" class="checkbox-input">
                <label for="male" class="checkbox-label">Male</label>
            </div>
            <div class="checkbox-parent">
                <input id="female" type="radio" value="" name="gender" class="checkbox-input">
                <label for="female" class="checkbox-label">Female</label>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <button type="submit" class="btn">Submit</button>
        </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>
