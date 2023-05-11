---
title: JaxPlays
layout: git-wiki-default
---

<div class="page-wrapper">
  <h1>{{ page.title }}</h1>

  <p>JaxPlays is an ever-growing, all-encompassing digital platform dedicated to shining a spotlight on Jacksonville's vibrant theatre community. From the latest productions and reviews to in-depth profiles of actors, crews, and musicians, we offer an insider's look into the exciting world of local theatre.</p>
  <p>JaxPlays is more than just a catalogue of plays and performances - it's a celebration of Jacksonville's performing arts scene, encapsulating the passion, creativity, and talent that goes into every performance. Whether you're an avid theatre-goer or someone curious about local art, JaxPlays is your go-to resource for everything the Northeast Florida and Southeast Georgia theatre community has to offer.</p>

  <style>
      .buttons-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        gap: 20px;
      }

      .button-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap: 20px;
      }

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-color: #39c;
        color: white;
        font-family: Montserrat;
        font-weight: 600;
        line-height: 2;
        text-decoration: none;
        width: calc(50% - 20px); /* 20px is twice the margin */
        text-align: center;
        border-radius: 5px;
        letter-spacing: 2px; /* Added letter spacing */
        transition: background-color 0.3s, transform 0.3s; /* Added transition for hover effect and click animation */
      }
      .button a:hover {
        color: white;
      }

      .button:hover {
        background-color: #2B8BB5; /* Lighter color when hovered over */
        color: white;
      }

      .button:active {
        transform: translateY(5px); /* Button drops 5px when clicked */
      }

      /* Mobile view */
      @media (max-width: 970px) {
        .button-row {
          flex-direction: column; /* Change to single column layout */
        }

        .button {
          width: 100%; /* Make buttons full width */
        }
      }
  </style>
  <div class="buttons-container">
    <div class="button-row">
      <a href="/people" class="button">People</a>
      <a href="/productions" class="button">Productions</a>
    </div>
    <div class="button-row">
      <a href="/theatres" class="button">Theatres</a>
      <a href="/venues" class="button">Venues</a>
    </div>
  </div>

</div>
