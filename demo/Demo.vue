<script setup>
import { ref } from 'vue'
import { EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio, EnhancedToggle } from '../src/index'

const scModel = ref(false)
const scLabel = ref('Simple')
const scDisabled = ref(false)
const scRounded = ref(false)
const scAnimate = ref(false)
const scSubclass = ref('primary')
const gcModel = ref(['Second', 'Third'])
const gcVal1 = ref('First')
const gcVal2 = ref('Second')
const gcVal3 = ref('Third')
const gcDisabled = ref(false)
const gcRounded = ref(false)
const gcAnimate = ref(false)
const gcInline = ref(true)
const gcCombine = ref(true)
const gcSubclass = ref('warning')
const rcModel = ref('B')
const rcVal1 = ref('A')
const rcVal2 = ref('B')
const rcVal3 = ref('C')
const rcDisabled = ref(false)
const rcRounded = ref(true)
const rcAnimate = ref(true)
const rcInline = ref(false)
const rcSubclass = ref('success')
const tcModel = ref(false)
const tcLabelOn = ref('Mandatory')
const tcLabelOff = ref('Optional')
const tcDisabled = ref(false)
const tcRounded = ref(true)
const tcStyleOn = ref('success')
const tcStyleOff = ref('danger')

// methods
const changeGroup = () => {
  gcModel.value = ['First', 'Second']
}
</script>

<template>
  <div class="container">

    <fieldset>
      <h1>Simple checkbox</h1>

      <div class="playWith">
        <h2>Play with it</h2>
        <enhanced-check :label="scLabel" :subClass="scSubclass" v-model="scModel"
                        :disabled="scDisabled" :rounded="scRounded" :animate="scAnimate">

        </enhanced-check>
        <br/>
        Model: {{ scModel }}

        <hr/>

        <label for="scLabel">Label:</label>
        <input type="text" v-model="scLabel" id="scLabel"/>

        <label for="scModel">Checked:</label>
        <input type="checkbox" v-model="scModel" id="scModel"/>

        <label for="scDisabled">Disabled:</label>
        <input type="checkbox" v-model="scDisabled" id="scDisabled"/>

        <label for="scRounded">Rounded:</label>
        <input type="checkbox" v-model="scRounded" id="scRounded"/>

        <label for="scAnimate">Transition:</label>
        <input type="checkbox" v-model="scAnimate" id="scAnimate"/>

        <label for="scSubclass">Style:</label>
        <select v-model="scSubclass" id="scSubclass">
          <option value="default">Default</option>
          <option value="primary">Primary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
      </div>

      <div class="gallery">
        <h2>Gallery</h2>
        <div class="half">
          <enhanced-check label="Basic" :checked="true"></enhanced-check>
          <enhanced-check label="Primary" subClass="primary" :checked="true"></enhanced-check>
          <enhanced-check label="Warning" subClass="warning" :checked="true"></enhanced-check>
          <enhanced-check label="Danger" subClass="danger" :checked="true"></enhanced-check>
          <enhanced-check label="Success" subClass="success" :checked="true"></enhanced-check>
        </div>
        <div class="half">
          <enhanced-check label="Basic" :checked="true" :rounded="true"></enhanced-check>
          <enhanced-check label="Primary" subClass="primary" :checked="true" :rounded="true"></enhanced-check>
          <enhanced-check label="Warning" subClass="warning" :checked="true" :rounded="true"></enhanced-check>
          <enhanced-check label="Danger" subClass="danger" :checked="true" :rounded="true"></enhanced-check>
          <enhanced-check label="Success" subClass="success" :checked="true" :rounded="true"></enhanced-check>
        </div>
      </div>

    </fieldset>

    <br/><br/>

    <fieldset>
      <h1>Combined warning checkboxes</h1>

      <div class="playWith">
        <h2>Play with it</h2>

        <enhanced-check-group :label="['First', 'Second', 'Third']" :subClass="gcSubclass" v-model="gcModel"
                              :disabled="gcDisabled" :rounded="gcRounded" :animate="gcAnimate"
                              :inline="gcInline" :combine="gcCombine" :value="[gcVal1, gcVal2, gcVal3]">

        </enhanced-check-group>
        <br/>
        Model: {{ gcModel }}

        <hr/>

        <label for="gcVal1">Value first:</label>
        <input type="text" v-model="gcVal1" id="gcVal1"/>

        <label for="gcVal2">Value second:</label>
        <input type="text" v-model="gcVal2" id="gcVal2"/>

        <label for="gcVal3">Value third:</label>
        <input type="text" v-model="gcVal3" id="gcVal3"/>

        <label for="gcDisabled">Disabled:</label>
        <input type="checkbox" v-model="gcDisabled" id="gcDisabled"/>

        <label for="gcRounded">Rounded:</label>
        <input type="checkbox" v-model="gcRounded" id="gcRounded"/>

        <label for="gcAnimate">Transition:</label>
        <input type="checkbox" v-model="gcAnimate" id="gcAnimate"/>

        <label for="gcInline">Inline:</label>
        <input type="checkbox" v-model="gcInline" id="gcInline"/>

        <label for="gcCombine">Combine:</label>
        <input type="checkbox" v-model="gcCombine" id="gcCombine"/>

        <label for="gcSubclass">Style:</label>
        <select v-model="gcSubclass" id="gcSubclass">
          <option value="default">Default</option>
          <option value="primary">Primary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>

        <br/>
        <button @click="changeGroup()">Select First and Second</button>
      </div>

    </fieldset>

    <br/><br/>

    <fieldset>
      <h1>Radio success buttons</h1>

      <div class="playWith">
        <h2>Play with it</h2>

        <enhanced-check-radio :label="['Element A', 'Element B', 'Element C']" :subClass="rcSubclass" v-model="rcModel"
                              :disabled="rcDisabled" :rounded="rcRounded" :animate="rcAnimate"
                              :inline="rcInline" :value="[rcVal1, rcVal2, rcVal3]">

        </enhanced-check-radio>
        <br/>
        Model: {{ rcModel }}

        <hr/>

        <label for="rcModel">Model:</label>
        <input type="text" v-model="rcModel" id="rcModel"/>

        <label for="rcVal1">Value first:</label>
        <input type="text" v-model="rcVal1" id="rcVal1"/>

        <label for="rcVal2">Value second:</label>
        <input type="text" v-model="rcVal2" id="rcVal2"/>

        <label for="rcVal3">Value third:</label>
        <input type="text" v-model="rcVal3" id="rcVal3"/>

        <label for="rcDisabled">Disabled:</label>
        <input type="checkbox" v-model="rcDisabled" id="rcDisabled"/>

        <label for="rcRounded">Rounded:</label>
        <input type="checkbox" v-model="rcRounded" id="rcRounded"/>

        <label for="rcAnimate">Transition:</label>
        <input type="checkbox" v-model="rcAnimate" id="rcAnimate"/>

        <label for="rcInline">Inline:</label>
        <input type="checkbox" v-model="rcInline" id="rcInline"/>

        <label for="rcSubclass">Style:</label>
        <select v-model="rcSubclass" id="rcSubclass">
          <option value="default">Default</option>
          <option value="primary">Primary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
      </div>

    </fieldset>

    <br/><br/>

    <fieldset>
      <h1>Checkbox toggle</h1>

      <div class="playWith">
        <h2>Play with it</h2>

        <enhanced-toggle :labelOn="tcLabelOn" :labelOff="tcLabelOff" :styleOn="tcStyleOn" :styleOff="tcStyleOff" v-model="tcModel"
                         :disabled="tcDisabled" :rounded="tcRounded">

        </enhanced-toggle>
        <br/>
        Model: {{ tcModel }}

        <hr/>

        <label for="tcLabelOn">Label on:</label>
        <input type="text" v-model="tcLabelOn" id="tcLabelOn"/>

        <label for="tcLabelOff">Label off:</label>
        <input type="text" v-model="tcLabelOff" id="tcLabelOff"/>

        <label for="tcModel">Checked:</label>
        <input type="checkbox" v-model="tcModel" id="tcModel"/>

        <label for="tcDisabled">Disabled:</label>
        <input type="checkbox" v-model="tcDisabled" id="tcDisabled"/>

        <label for="tcRounded">Rounded:</label>
        <input type="checkbox" v-model="tcRounded" id="tcRounded"/>

        <label for="tcStyleOn">Style on:</label>
        <select v-model="tcStyleOn" id="tcStyleOn">
          <option value="default">Default</option>
          <option value="primary">Primary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>

        <label for="tcStyleOff">Style off:</label>
        <select v-model="tcStyleOff" id="tcStyleOff">
          <option value="default">Default</option>
          <option value="primary">Primary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
      </div>

      <div class="gallery">
        <h2>Gallery</h2>
        <enhanced-toggle></enhanced-toggle>
        <enhanced-toggle styleOff="warning" styleOn="success"></enhanced-toggle>
        <enhanced-toggle :rounded="true" :checked="true"></enhanced-toggle>
      </div>

    </fieldset>

  </div>
</template>

<style>
h1 {
  margin-top: 0;
  margin-bottom: 0;
}

.container {
  margin-top: 20px;
}

.playWith {
  width: 70%;
  float: left;
}

.gallery {
  float: right;
  width: 20%;
}

.half {
  width: 50%;
  float: left;
}

</style>
