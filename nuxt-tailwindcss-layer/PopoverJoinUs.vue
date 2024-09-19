<template>
  <div class="flex justify-center items-center">
    <el-popover
      placement="bottom"
      title="Title"
      :width="200"
      trigger="click"
      content="this is content, this is content, this is content"
    >
      <template #reference>
        <el-button class="m-2">Click to activate</el-button>
      </template>
    </el-popover>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .become-member-en {
    width: 174px;
    height: 28px;
    padding-left: 20px;
    border-radius: 4px;
    background: linear-gradient(270deg, #fae5cd 0%, #f4be9c 100%);
    background-image: url('https://resources.jctrans.com/res/era/pc/img/btn_member_en.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #bd5339;
    font-family: Poppins-S, Poppins;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
  }

  .become-member-cn {
    width: 95px;
    height: 28px;
    padding-left: 20px;
    border-radius: 4px;
    background-image: url('https://resources.jctrans.com/res/era/pc/img/joinus.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #bd5339;
    font-family: Poppins-S, Poppins;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
  }

  .popover-join-us-content {
    width: 332px;
    min-height: 235px;
    padding: 0;
    border: none;
    border-radius: 8px;
    background: #000c31;

    --el-popover-padding: 0;

    .join-us-content {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      .title {
        padding: 16px;
        color: #fff;
        font-family: Poppins-B, Poppins;
        font-size: 18px;
        font-weight: 900;
        line-height: 25px;
        word-break: break-word;
        user-select: none;
      }

      .desc {
        color: #fff;
        font-family: Poppins-R, Poppins;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        text-align: left;
        // word-break: break-word;
        cursor: pointer;

        .icon {
          width: 24px;
          height: 24px;
          margin-right: 4px;
          margin-left: 6px;
        }
      }

      .join-btn {
        width: 300px;
        height: 48px;
        border: none;
        border-radius: 4px;
        background: #fff;
        color: #000c31;
        font-family: Poppins-SemiBold, Poppins;
        font-size: 14px;
        font-weight: 600;
        line-height: 16px;
        text-align: center;
        cursor: pointer;
      }
    }

    .popper__arrow::after {
      display: none;
    }
  }
</style>
