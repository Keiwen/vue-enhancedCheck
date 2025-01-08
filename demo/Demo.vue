<template>
  <div class="container">

    <fieldset>
      <h1>Simple checkbox</h1>

      <div class="playWith">
        <h2>Play with it</h2>
        <enhanced-check :label="sc_label" :subClass="sc_subclass" v-model="sc_model"
                        :disabled="sc_disabled" :rounded="sc_rounded" :animate="sc_animate">

        </enhanced-check>
        <br/>
        Model: {{ sc_model }}

        <hr/>

        <label for="sc_label">Label:</label>
        <input type="text" v-model="sc_label" id="sc_label"/>

        <label for="sc_model">Checked:</label>
        <input type="checkbox" v-model="sc_model" id="sc_model"/>

        <label for="sc_disabled">Disabled:</label>
        <input type="checkbox" v-model="sc_disabled" id="sc_disabled"/>

        <label for="sc_rounded">Rounded:</label>
        <input type="checkbox" v-model="sc_rounded" id="sc_rounded"/>

        <label for="sc_animate">Transition:</label>
        <input type="checkbox" v-model="sc_animate" id="sc_animate"/>

        <label for="sc_subclass">Style:</label>
        <select v-model="sc_subclass" id="sc_subclass">
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

        <enhanced-check-group :label="['First', 'Second', 'Third']" :subClass="gc_subclass" v-model="gc_model"
                              :disabled="gc_disabled" :rounded="gc_rounded" :animate="gc_animate"
                              :inline="gc_inline" :combine="gc_combine" :value="[gc_val1, gc_val2, gc_val3]">

        </enhanced-check-group>
        <br/>
        Model: {{ gc_model }}

        <hr/>

        <label for="gc_val1">Value first:</label>
        <input type="text" v-model="gc_val1" id="gc_val1"/>

        <label for="gc_val2">Value second:</label>
        <input type="text" v-model="gc_val2" id="gc_val2"/>

        <label for="gc_val3">Value third:</label>
        <input type="text" v-model="gc_val3" id="gc_val3"/>

        <label for="gc_disabled">Disabled:</label>
        <input type="checkbox" v-model="gc_disabled" id="gc_disabled"/>

        <label for="gc_rounded">Rounded:</label>
        <input type="checkbox" v-model="gc_rounded" id="gc_rounded"/>

        <label for="gc_animate">Transition:</label>
        <input type="checkbox" v-model="gc_animate" id="gc_animate"/>

        <label for="gc_inline">Inline:</label>
        <input type="checkbox" v-model="gc_inline" id="gc_inline"/>

        <label for="gc_combine">Combine:</label>
        <input type="checkbox" v-model="gc_combine" id="gc_combine"/>

        <label for="gc_subclass">Style:</label>
        <select v-model="gc_subclass" id="gc_subclass">
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

        <enhanced-check-radio :label="['Element A', 'Element B', 'Element C']" :subClass="rc_subclass" v-model="rc_model"
                              :disabled="rc_disabled" :rounded="rc_rounded" :animate="rc_animate"
                              :inline="rc_inline" :value="[rc_val1, rc_val2, rc_val3]">

        </enhanced-check-radio>
        <br/>
        Model: {{ rc_model }}

        <hr/>

        <label for="rc_model">Model:</label>
        <input type="text" v-model="rc_model" id="rc_model"/>

        <label for="rc_val1">Value first:</label>
        <input type="text" v-model="rc_val1" id="rc_val1"/>

        <label for="rc_val2">Value second:</label>
        <input type="text" v-model="rc_val2" id="rc_val2"/>

        <label for="rc_val3">Value third:</label>
        <input type="text" v-model="rc_val3" id="rc_val3"/>

        <label for="rc_disabled">Disabled:</label>
        <input type="checkbox" v-model="rc_disabled" id="rc_disabled"/>

        <label for="rc_rounded">Rounded:</label>
        <input type="checkbox" v-model="rc_rounded" id="rc_rounded"/>

        <label for="rc_animate">Transition:</label>
        <input type="checkbox" v-model="rc_animate" id="rc_animate"/>

        <label for="rc_inline">Inline:</label>
        <input type="checkbox" v-model="rc_inline" id="rc_inline"/>

        <label for="rc_subclass">Style:</label>
        <select v-model="rc_subclass" id="rc_subclass">
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

        <enhanced-toggle :labelOn="tc_labelOn" :labelOff="tc_labelOff" :styleOn="tc_styleOn" :styleOff="tc_styleOff" v-model="tc_model"
                         :disabled="tc_disabled" :rounded="tc_rounded">

        </enhanced-toggle>
        <br/>
        Model: {{ tc_model }}

        <hr/>

        <label for="tc_labelOn">Label on:</label>
        <input type="text" v-model="tc_labelOn" id="tc_labelOn"/>

        <label for="tc_labelOff">Label off:</label>
        <input type="text" v-model="tc_labelOff" id="tc_labelOff"/>

        <label for="tc_model">Checked:</label>
        <input type="checkbox" v-model="tc_model" id="tc_model"/>

        <label for="tc_disabled">Disabled:</label>
        <input type="checkbox" v-model="tc_disabled" id="tc_disabled"/>

        <label for="tc_rounded">Rounded:</label>
        <input type="checkbox" v-model="tc_rounded" id="tc_rounded"/>

        <label for="tc_styleOn">Style on:</label>
        <select v-model="tc_styleOn" id="tc_styleOn">
          <option value="default">Default</option>
          <option value="primary">Primary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>

        <label for="tc_styleOff">Style off:</label>
        <select v-model="tc_styleOff" id="tc_styleOff">
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

<script>
import { EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio, EnhancedToggle } from '../src/index'

export default {
  components: { EnhancedCheck, EnhancedCheckGroup, EnhancedCheckRadio, EnhancedToggle },
  data () {
    return {
      sc_model: false,
      sc_label: 'Simple',
      sc_disabled: false,
      sc_rounded: false,
      sc_animate: false,
      sc_subclass: 'primary',
      gc_model: ['Second', 'Third'],
      gc_val1: 'First',
      gc_val2: 'Second',
      gc_val3: 'Third',
      gc_disabled: false,
      gc_rounded: false,
      gc_animate: false,
      gc_inline: true,
      gc_combine: true,
      gc_subclass: 'warning',
      rc_model: 'B',
      rc_val1: 'A',
      rc_val2: 'B',
      rc_val3: 'C',
      rc_disabled: false,
      rc_rounded: true,
      rc_animate: true,
      rc_inline: false,
      rc_subclass: 'success',
      tc_model: false,
      tc_labelOn: 'Mandatory',
      tc_labelOff: 'Optional',
      tc_disabled: false,
      tc_rounded: true,
      tc_styleOn: 'success',
      tc_styleOff: 'danger'
    }
  },
  methods: {
    changeGroup () {
      this.gc_model = ['First', 'Second']
    }
  }
}
</script>

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
