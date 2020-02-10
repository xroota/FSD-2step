class Pagination {
  constructor($elem) {
    this.$pagination = $elem;
    this.$twbsPagination = this.$pagination.find(".js-twbs-pagination");
    this.totalPages = this.$pagination.attr("data-totalPages");
    this.visiblePages = this.$pagination.attr("data-visiblePages");
    this.$twbsPagination
      .twbsPagination({
        next: "arrow_forward",
        last: this.totalPages,
        totalPages: this.totalPages,
        visiblePages: this.visiblePages,
        onPageClick: (event, page) => {}
      })
      .on("page", (event, page) => {
        this.setSeparator();
        if (page == 15) {
          this.$separateItem.addClass("disabled");
          this.$lastItem.removeClass("disabled");
          this.$lastItem.addClass("active");
        }
        this.$separateItem.removeClass("active");
        this.$separateItemLink.text("...");
      });

    this.setSeparator();
  }
  setSeparator() {
    this.$separateItemLink = this.$pagination.find(
      ".page-item:nth-child(6) .page-link"
    );

    this.$separateItem = this.$pagination.find(
        ".pagination .page-item:nth-child(6)"
      );
    this.$lastItem = this.$pagination.find(".page-item.last");
    this.$separateItemLink.text("...");
    this.$separateItem.addClass("disabled");
  }
}

export default Pagination;
