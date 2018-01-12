<template>
<div>
    <mobile-tear-sheet>
        <ui-list>
            <ui-list-item title="Inbox">
                <ui-icon slot="left" value="inbox"/>
            </ui-list-item>
            <ui-list-item title="Starred">
                <ui-icon slot="left" value="grade"/>
            </ui-list-item>
            <ui-list-item title="Sent mail">
                <ui-icon slot="left" value="send"/>
            </ui-list-item>
            <ui-list-item title="Drafts">
                <ui-icon slot="left" value="drafts"/>
            </ui-list-item>
        </ui-list>
        <ui-divider />
        <ui-list>
            <ui-list-item title="All mail">
                <ui-icon slot="right" value="info"/>
            </ui-list-item>
            <ui-list-item title="Trash">
                <ui-icon slot="right" value="info"/>
            </ui-list-item>
            <ui-list-item title="Spam">
                <ui-icon slot="right" value="info"/>
            </ui-list-item>
            <ui-list-item title="Follow up">
                <ui-icon slot="right" value="info"/>
            </ui-list-item>
        </ui-list>
    </mobile-tear-sheet>
</div>
</template>
