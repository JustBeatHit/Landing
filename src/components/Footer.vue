<template>
  <footer class="footer">
    <div class="leftSide">
    <div class="container">
      <div class="footer-section">
        <h2>JUST BEAT HIT</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-section">
        <h3>PRODUCT</h3>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Case studies</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Updates</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>COMPANY</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Culture</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>SUPPORT</h3>
        <ul>
          <li><a href="#">Getting started</a></li>
          <li><a href="#">Help center</a></li>
          <li><a href="#">Server status</a></li>
          <li><a href="#">Report a bug</a></li>
          <li><a href="#">Chat support</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>CONTACTS US</h3>
        <p><i class="fas fa-envelope"></i> contact@company.com</p>
        <p><i class="fas fa-phone"></i> (414) 687 - 5892</p>
        <p><i class="fas fa-map-marker-alt"></i> 794 Mcallister St, San Francisco, 94102</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © 2024</p>
      <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a>
    </div>
  </div>
  <div class="rightSide">

<div class="footer-logo-section">
  <img class="footerLogo" src="../assets/img/FooterLogo.svg" alt="Just Beat Hit Logo" />
</div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.footer {
  background: linear-gradient(45deg, #ff00bf 10%, #ff53a3 60%, #ff893a 100%);
  padding: 20px 0;
  color: white;
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;

  .container {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;

    .footer-section {
      flex: 1;
      margin-right: 20px;

      h2, h3 {
        margin-bottom: 10px;
      }

      p {
        margin: 5px 0;

        i {
          margin-right: 5px;
        }
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 5px;

          a {
            color: white;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .social-icons {
        display: flex;
        gap: 10px;
        margin-top: 10px;

        a {
          color: white;
          font-size: 1.2em;
        }
      }
    }
  }

  .footer-logo-section {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    .footerLogo {
      width: 300px; /* Adjust size as needed */
      height: auto;
    }
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding: 10px 50px;
    text-align: center;

    p {
      display: inline;
      margin-right: 10px;
    }

    a {
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
