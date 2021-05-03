const app = new Vue({
  el: '#app',
  // ========================
  data: {
    timer: null,
    totalTime: (25 * 60),
    resetButton: false,
    title: "Let the countdown begin!!"
  },
  // ========================
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      this.title = "Greatness is within sight!!";
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
      this.title = "Never quit, keep going!!";
    },
    resetTimer: function() {
      this.totalTime = (25 * 60);
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
      this.title = "Let the countdown begin!!";
    },
    padTime: function(time) {
      return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
      this.totalTime--;
    }
  },
  // ========================
  computed: {
    minutes: function() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds: function() {
      const seconds = this.totalTime - (this.minutes * 60);
      return this.padTime(seconds);
    }
  }
})