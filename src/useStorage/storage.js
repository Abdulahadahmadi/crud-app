import { ref, watch } from 'vue'

export function storage(key) {
    let storedValue = localStorage.getItem(key)

    let val = ref(storedValue)

    watch(val, () => {
        write();
    })

    function write(){
        localStorage.setItem(key, val.value)
    }
    
    return val;
}