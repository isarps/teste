<!-- <template>
  <div class="about">
    <div class="central">
        <span class="p-input-icon-left">
            <img src="4" alt="../imagens">
            <InputText type="text" v-model="value3" placeholder="Search" />
             <Button icon="pi pi-search" class="p-button-rounded p-button-success" />
             <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text" />
        </span>
        <div class='central margin-bottom: 10px'>
                <Button label="Consultar texto" />
                <Button label="Consultar Arqruivo" class="p-button-outlined p-button-info" />
                
        </div>


             
    </div>
  

       
  </div>
 
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Card from 'primevue/card';
import Panel from 'primevue/panel';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
import Button from 'primevue/button'
import 'primeicons/primeicons.css';
import {PrimeIcons} from 'primevue/api'

export default {
  name: 'AboutView',
  components: {
    HelloWorld,
    Card,
    Panel,
    InputText,
    Button,
    
  },
     data() {
      return {
      value3: null,
      username: "",
      vuleu3: null,
      items: [
				{
					label: '',
					icon: PrimeIcons.REFRESH,
                    to: '/update'
				}],
           
    }}
    
}
</script>

<style lang="sass" scoped>
.p-button {
    margin-right: .5rem
}

.p-buttonset {
    .p-button {
        margin-right: 0
    }
}

.sizes {
    .button {
        margin-bottom: .5rem
        display: block

        &:last-child {
            margin-bottom: 0
        }
    }
}

@media screen and (max-width: 640px) {
    .p-button {
        margin-bottom: .5rem

        &:not(.p-button-icon-only) {
            display: flex
            width: 100%
        }
    }

    .p-buttonset {
        .p-button {
            margin-bottom: 0
        }
    }
}
</style>
 <style>

 /* .last-child {
            margin-bottom: 0;
        }

.p-inputtext{
          display: block;
        margin-bottom: .5rem;
} 


.field * {
    display: block;
} */

.central{
  flex: 'justify-content-center';
  font-size: medium;
  


}
</style>
 -->
