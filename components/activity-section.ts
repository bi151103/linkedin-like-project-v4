export function createActivitySection(): HTMLElement {
  const activitySection = document.createElement("section");
  activitySection.className = "mt-10px p-15px bg-white";

  const title = document.createElement("h2");
  activitySection.appendChild(title);
  title.textContent = "Activity";

  const follower = document.createElement("p");
  activitySection.appendChild(follower);
  follower.textContent = "74 followers";
  follower.className = "text-xs-small";

  const activityLink = document.createElement("a");
  activitySection.appendChild(activityLink);
  activityLink.href = "./feed-activity.html";
  activityLink.className = "w-full flex mt-10px text-inherit";

  const activityThumb = document.createElement("img");
  activityLink.appendChild(activityThumb);
  activityThumb.src = "./images/liverpool.jpg";
  activityThumb.className = "h-md-img w-md-img object-cover";

  const activityRight = document.createElement("div");
  activityLink.appendChild(activityRight);
  activityRight.className = "pl-10px";

  const activityContent = document.createElement("p");
  activityRight.appendChild(activityContent);
  activityContent.textContent = `LFC and adidas have unveiled their new Bringback range, with a
            collection inspired by the club's legendary 1995/96 away kit. At the
            heart of the Bringback range is a reissue of the club's iconic
            1995/96 away shirt, reconnecting supporters with one of the most
            recognisable designs in the club's history. The collection is
            supported by a full archive-inspired training wear offering,
            including classic silhouettes such as shorts, a sweatshirt, drill
            top, drill pants and T-shirt. Each piece returns in the unmistakable
            green, black and white colour palette synonymous with the era, while
            heritage details including the original Liverpool FC crest from the
            1995/96 season, Carlsberg sponsor and bold adidas branding complete
            the authentic 90s aesthetic.`;
  activityContent.className = "text-emphasis-tx line-clamp-2";

  const activityReactHistory = document.createElement("p");
  activityRight.appendChild(activityReactHistory);
  activityReactHistory.textContent = "You liked this";
  activityReactHistory.className = "text-xs-small";

  return activitySection;
}
